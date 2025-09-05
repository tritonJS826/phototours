import {env} from 'src/config/env';

const ZOHO_HOST = 'https://accounts.zoho.eu';
const ZOHO_API_HOST = 'https://www.zohoapis.eu';
const OAUTH_AUTHORIZE = `${ZOHO_HOST}/oauth/v2/auth`;
const OAUTH_TOKEN = `${ZOHO_HOST}/oauth/v2/token`;
const API_ORG = `${ZOHO_API_HOST}/crm/v3/org`;
const API_LEADS = `${ZOHO_API_HOST}/crm/v3/Leads`;

const ZOHO_SCOPES = [
  'ZohoCRM.modules.ALL',
  'ZohoCRM.settings.ALL',
  'ZohoCRM.org.READ',
] as const;

export interface ZohoConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface ZohoTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  api_domain: string;
  token_type: string;
  expires_in_sec: number;
}

type LeadPayload =
  | Record<string, unknown>
  | {
      data: unknown[];
    };

export class ZohoService {

  private readonly config: ZohoConfig;

  private accessToken?: string;

  private refreshToken?: string;

  constructor(config: ZohoConfig) {

    this.config = config;
    this.refreshToken = env.ZOHO_REFRESH_TOKEN;

  }

  public getAuthUrl(): string {

    const params = new URLSearchParams({
      client_id: this.config.clientId,
      response_type: 'code',
      redirect_uri: this.config.redirectUri,
      scope: ZOHO_SCOPES.join(','),
      access_type: 'offline',
      prompt: 'consent',
    });

    return `${OAUTH_AUTHORIZE}?${params.toString()}`;

  }

  public async exchangeCodeForTokens(code: string): Promise<ZohoTokenResponse> {

    const response = await fetch(OAUTH_TOKEN, {
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
        `Failed to exchange code for tokens: ${response.status} ${response.statusText}`,
      );
    }

    const data = (await response.json()) as ZohoTokenResponse;
    this.accessToken = data.access_token;
    if (data.refresh_token) {
      this.refreshToken = data.refresh_token;
    }

    return data;

  }

  public async refreshAccessToken(): Promise<string> {

    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch(OAUTH_TOKEN, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        refresh_token: this.refreshToken,
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to refresh token: ${response.status} ${response.statusText}`,
      );
    }

    const data = (await response.json()) as ZohoTokenResponse;
    this.accessToken = data.access_token;

    return data.access_token;

  }

  public async getOrganizationInfo(): Promise<unknown> {

    const token = await this.getValidAccessToken();

    const response = await fetch(API_ORG, {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to get organization info: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    return await response.json();

  }

  public async createLead(payload: LeadPayload): Promise<unknown> {

    const token = await this.getValidAccessToken();

    const hasDataArray =
      typeof (payload as {data?: unknown[]}).data !== 'undefined' &&
      Array.isArray((payload as {data?: unknown[]}).data);

    const body = hasDataArray ? payload : {data: [payload]};

    const response = await fetch(API_LEADS, {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to create lead: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    return await response.json();

  }

  public setTokens(accessToken: string, refreshToken?: string): void {

    this.accessToken = accessToken;
    if (refreshToken) {
      this.refreshToken = refreshToken;
    }

  }

  public saveRefreshToken(refreshToken: string): void {

    this.refreshToken = refreshToken;

  }

  private async getValidAccessToken(): Promise<string> {

    if (this.accessToken) {
      return this.accessToken;
    }

    if (this.refreshToken) {
      return await this.refreshAccessToken();
    }

    throw new Error('No access token available. Please authenticate first.');

  }

}

export function createZohoService(): ZohoService {

  return new ZohoService({
    clientId: env.ZOHO_CLIENT_ID,
    clientSecret: env.ZOHO_CLIENT_SECRET,
    redirectUri: env.ZOHO_REDIRECT_URI,
  });

}
