export interface ICompany {
    id: number;
    title: string;
    address: string;
    short_description: string;
    description: string;
    email: string;
    phone: string;
    image_name: string;
    image_link: string;
    history_image_name: string;
    history_image_link: string;
    history_description: string;
    history_title: string;
    history_short_description: string;
    created_at?: Date;
    updated_at?: Date;
  }