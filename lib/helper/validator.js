import validator from 'validator';
export const validate = (data, type, tag)=>{
    let err = []
    if(type == 'email')
        {
        switch(type){
            case 'email': {
                if(validator.isEmpty(data)){
                    err.push(`${tag} cannot be blank`)
                }

            }
        }
           //isAscii(str)
   // isEmail(str [, options])
   // isEmpty(str [, options])

        }

    //isAscii(str)
   // isEmail(str [, options])
   // isEmpty(str [, options])
    return {ok:err==0, data:"testDatra"}
}