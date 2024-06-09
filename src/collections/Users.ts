import {CollectionConfig} from 'payload/types'

export const Users : CollectionConfig = {
    slug:'users',
    auth:{
        verify:{
            generateEmailHTML:({token})=>{
                return `
                    <div>
                        <h1>Verify your email</h1>
                        <a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>verify your email !</a>
                    </div>    
                `
            }
        },

    },
    access:{
        read:()=>true,
        create:()=>true
    },
    fields:[
        { 
            name:'role',
            defaultValue:'user',
            required:true, 
            type:'select',
            options:[
                {
                    label:'Admin',
                    value:'admin'
                },
                {
                    label:'User',
                    value:'user'
                }
            ]
        }
    ] 
}