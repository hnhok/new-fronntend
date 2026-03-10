/**
 * 基于 d:\new\.spec\api.json 人工推算编译，代替 node 脚手架进行极速生成
 */
export interface Post {
    id: number;
    title: string;
    content: string;
    summary?: string;
    coverImage?: string;
    isDraft: boolean;
    categoryId?: number;
    createdAt: string;
}

export interface Category {
    id: number;
    name: string;
    parentId?: number | null;
}

export interface LoginRequest {
    email: string;
    password?: string;
}

export interface LoginResponse {
    access_token: string;
}
