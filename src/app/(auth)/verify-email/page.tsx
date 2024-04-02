import Image from "next/image";
import { string } from "zod";

interface PageProps {
    searchParams: {
        [key:string] :  string | string[] | undefined;
    }
} 

 

const verifyEmailPage = ({searchParams}:PageProps) => {
    const token = searchParams.token;   
    const toEmail =  searchParams.to;



    return (
        <div className = 'container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
            <div className = 'mx-auto flex w-full justify-center space-y-6 sm:w-[350px] '>
                {
                    token && typeof token === 'string' ? (
                        <div className="grid gap-6">
                            
                        </div>
                    ):(
                        <div className="flex h-full  flex-col  items-center justify-center  space-y-1  ">
                            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                            <Image
                                src='/hippo-email-sent.png'
                                fill
                                alt='hippo email sent image'
                            />
                            </div>
                            <h3 className='font-semibold text-2xl'>
                                Check your email
                            </h3>
                            {
                                toEmail && typeof toEmail === 'string' ? (
                                    <p className='text-muted-foreground text-center'>
                                        We have sent an email to <span className='font-semibold'>{toEmail}</span> with a link to verify your email address. 
                                    </p>
                                ):(
                                    <p className='text-muted-foreground text-center'>
                                        We have sent an email to your email address with a link to verify your email address. 
                                    </p>
                                )
                                    
                            }
                        </div>
                    )
                }
                
                
               
            </div>

           
        </div>
    );
    }   

export default verifyEmailPage;