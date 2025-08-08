import {env} from 'src/config/env';

export interface ZohoConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface ZohoTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  api_domain: string;
  token_type: string;
  expires_in_sec: number;
}

export class ZohoService {

  private config: ZohoConfig;

  private accessToken: string | null = null;

  private refreshToken: string | null = null;

  constructor(config: ZohoConfig) {
    this.config = config;

    this.refreshToken = env.ZOHO_REFRESH_TOKEN;
  }

  public getAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      response_type: 'code',
      redirect_uri: this.config.redirectUri,
      scope: 'ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.READ',
      access_type: 'offline',
      prompt: 'consent',
    });
    return `https://accounts.zoho.eu/oauth/v2/auth?${params.toString()}`;
  }

  public async exchangeCodeForTokens(code: string): Promise<ZohoTokenResponse> {
    const response = await fetch('https://accounts.zoho.eu/oauth/v2/token', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        code,
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        redirect_uri: this.config.redirectUri,
        grant_type: 'authorization_code',
      }),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to exchange code for tokens: ${response.statusText}`,
      );
    }

    const data: ZohoTokenResponse = await response.json();
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;

    return data;
  }

  public async refreshAccessToken(): Promise<string> {
    if (!this.refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await fetch("https://accounts.zoho.eu/oauth/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        refresh_token: this.refreshToken,
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        grant_type: "refresh_token",
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data = await response.json();
    this.accessToken = data.access_token;

    return data.access_token;
  }

  public async getOrganizationInfo(): Promise<any> {
    const token = await this.getValidAccessToken();

    console.log(
      ' Making request to Zoho API with token:',
      token.substring(0, 20) + '...',
    );

    const response = await fetch('https://www.zohoapis.eu/crm/v3/org', {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(
      'Zoho API response status:',
      response.status,
      response.statusText,
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Zoho API error response:', errorText);
      throw new Error(
        `Failed to get organization info: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    const data = await response.json();
    console.log(" Zoho API response:", JSON.stringify(data, null, 2));

    return data;
  }

  public async createLead(leadData: any): Promise<any> {
    const token = await this.getValidAccessToken();

    console.log('Creating lead with data:', JSON.stringify(leadData, null, 2));
    console.log('Using token:', token.substring(0, 20) + '...');


    let requestBody;
    if (leadData.data && Array.isArray(leadData.data)) {
      requestBody = leadData;
    } else {
      requestBody = {data: [leadData]};
    }

    console.log('Sending to Zoho API:', JSON.stringify(requestBody, null, 2));

    const response = await fetch('https://www.zohoapis.eu/crm/v3/Leads', {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    console.log(
      'Zoho API response status:',
      response.status,
      response.statusText,
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error(' Zoho API error response:', errorText);
      throw new Error(
        `Failed to create lead: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    const data = await response.json();
    console.log("Zoho API response:", JSON.stringify(data, null, 2));

    return data;
  }

  public setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public saveRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
    console.log("Refresh token saved for future use");
  }

  private async getValidAccessToken(): Promise<string> {
    if (!this.accessToken) {
      if (this.refreshToken) {
        console.log(' Refreshing access token...');

        return await this.refreshAccessToken();
      }
      throw new Error('No access token available. Please authenticate first.');
    }

return this.accessToken;
}
}

export function createZohoService(): ZohoService {
  return new ZohoService({
    clientId: env.ZOHO_CLIENT_ID,
    clientSecret: env.ZOHO_CLIENT_SECRET,
    redirectUri: env.ZOHO_REDIRECT_URI,
  });
}
