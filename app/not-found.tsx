'use client'

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const notFoundPage = () => {
    return ( 
       <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src='/imgs/andrescondeviajeslogo1.jpg' width={500} height={500} alt={`${APP_NAME} logo`} priority={true}/>
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">No encontrado</h1>
        <p className="text-destructive">No se pudo encontrar el sitio</p>
        <Button variant='outline' className='mt-4 ml-2' onClick={()=> (window.location.href='/')}>
            Ir al
        </Button>
        </div>
       </div>
     );
}
 
export default notFoundPage;