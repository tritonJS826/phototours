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
    // Инициализируем refresh token из переменных окружения
    this.refreshToken = env.ZOHO_REFRESH_TOKEN || null;
  }

  /**
   * Генерирует URL для OAuth авторизации
   */
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

  /**
   * Обменивает код авторизации на токены
   */
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
      throw new Error(`Failed to exchange code for tokens: ${response.statusText}`);
    }

    const data: ZohoTokenResponse = await response.json();
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;

    return data;
  }

  /**
   * Обновляет access token используя refresh token
   */
  public async refreshAccessToken(): Promise<string> {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch('https://accounts.zoho.eu/oauth/v2/token', {
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
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data = await response.json();
    this.accessToken = data.access_token;

    return data.access_token;
  }

  /**
   * Получает информацию об организации
   */
  public async getOrganizationInfo(): Promise<unknown> {
    const token = await this.getValidAccessToken();

    // Console.log('🔍 Making request to Zoho API with token:', token.substring(0, 20) + '...');

    const response = await fetch('https://www.zohoapis.eu/crm/v3/org', {
      headers: {
        'Authorization': `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // Console.log('📡 Zoho API response status:', response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      // Console.error('❌ Zoho API error response:', errorText);
      throw new Error(`Failed to get organization info: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    // Console.log('✅ Zoho API response:', JSON.stringify(data, null, 2));

    return data;
  }

  /**
   * Создает лид в Zoho CRM
   */
  public async createLead(leadData: Record<string, unknown>): Promise<unknown> {
    const token = await this.getValidAccessToken();

    // Console.log('🔍 Creating lead with data:', JSON.stringify(leadData, null, 2));
    // console.log('🔑 Using token:', token.substring(0, 20) + '...');

    // Проверяем структуру данных
    let requestBody;
    if (leadData.data && Array.isArray(leadData.data)) {
      // Если данные уже в формате {data: [...]}
      requestBody = leadData;
    } else {
      // Если данные пришли как объект лида
      requestBody = {data: [leadData]};
    }

    // Const JSON_INDENT = 2;
    // Console.log('📤 Sending to Zoho API:', JSON.stringify(requestBody, null, JSON_INDENT));

    const response = await fetch('https://www.zohoapis.eu/crm/v3/Leads', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    // Console.log('📡 Zoho API response status:', response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      // Console.error('❌ Zoho API error response:', errorText);
      throw new Error(`Failed to create lead: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    // Console.log('✅ Zoho API response:', JSON.stringify(data, null, 2));

    return data;
  }

  /**
   * Устанавливает токены (для сохранения в БД)
   */
  public setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  /**
   * Сохраняет refresh token (для постоянного хранения)
   */
  public saveRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
    // Console.log('💾 Refresh token saved for future use');
    // В реальном приложении здесь нужно сохранить в БД или файл
  }

  /**
   * Получает валидный access token (обновляет если нужно)
   */
  private async getValidAccessToken(): Promise<string> {
    if (!this.accessToken) {
      // Если нет access token, попробуем обновить через refresh token
      if (this.refreshToken) {
        // Console.log('🔄 Refreshing access token...');

        return await this.refreshAccessToken();
      }
      throw new Error('No access token available. Please authenticate first.');
    }

    // В реальном приложении здесь должна быть проверка срока действия токена
    // Пока просто возвращаем текущий токен
    return this.accessToken;
  }

}

/**
 * Создает экземпляр ZohoService с конфигурацией из переменных окружения
 */
export function createZohoService(): ZohoService {
  return new ZohoService({
    clientId: env.ZOHO_CLIENT_ID,
    clientSecret: env.ZOHO_CLIENT_SECRET,
    redirectUri: env.ZOHO_REDIRECT_URI,
  });
}
