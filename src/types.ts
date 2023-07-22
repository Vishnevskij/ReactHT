import { Dispatch, JSX } from "react";

export interface MainContextInterface {
    posts: PostInterface[];
    setPosts: Dispatch<PostInterface[]>;
    renderPosts: () => JSX.Element;
    users: UserInterface[];
    setUsers: Dispatch<UserInterface[]>;
    setMaxUserNumbers: Dispatch<number>;
    maxUserNumbers: number
    
}

export interface PostInterface {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface UserInterface {
    name: string;
    id: number;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: CompanyInterface;
    address: AddressInterface;

}

export interface CompanyInterface {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface AddressInterface {
    city: string;
    geo: GeoInterface;
    street: string;
    suite: string;
    zipcode: string;
}

export interface GeoInterface {
    lat: string;
    Ing: string
}