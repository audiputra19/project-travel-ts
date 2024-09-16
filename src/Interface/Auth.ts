export interface UserDataType {
    id: number;
    email: string;
    username: string;
    password: string;
}

export interface AuthResponseType {
    userData: UserDataType;
    token: string
}

export interface AuthResponse {
    data: AuthResponseType;
}

export interface AuthRequest {
    email: string;
    password: string;
}