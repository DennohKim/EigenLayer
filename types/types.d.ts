
 interface DashboardViewProps {

 }





 interface Share {
    strategyAddress: string;
    shares: string;
}



export interface Avs {
   data: {
    address: string;
    metadataName: string;
    metadataDescription: string;
    metadataDiscord?: string; // Optional field
    metadataLogo: string;
    metadataTelegram?: string; // Optional field
    metadataWebsite: string;
    metadataX: string;
    shares: Share[];
    tags: string[];
    totalStakers: number;
    totalOperators: number;
   }

}

export interface Operators {
   data: {
    address: string;
    metadataName: string;
    metadataDescription: string;
    metadataDiscord?: string; // Optional field
    metadataLogo: string;
    metadataTelegram?: string; // Optional field
    metadataWebsite: string;
    metadataX: string;
    shares: Share[];
    totalStakers: number;
   }
}


interface iAvs {
    data: {
        data: Avs[],
    } ;

}

export interface iOperators {
    data: {
        data: Operators[]
    } ;

}