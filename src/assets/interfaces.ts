//we can create interface by typing: ng new interface <name-interface>

export interface IProduct {
     id: number;
    name: string; 
    category_id: string;
   description: string;
   price: number;
   imageLink?: string,
   is_available?: boolean;
   rating?: number;
   reviews?: string[];
   brand?: string;
   color?: string
}

export interface Order {
   costumerId: number;
   products: IProduct[];
   paid: boolean;
}

export interface Costumer {
   id: number;
   name: string;
   email?: string;
   password?: string;
   address?: string;
   state?: string
   city?: string,

}