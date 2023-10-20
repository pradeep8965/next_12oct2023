//1. import Area
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


//2. Defination Area
 function handler(req, res) {
          //function serialization 
  //object.method().method(actualargument);
                      //{property:value}
  res.status(200).json({
                           msg1:`Hello1 ${req.query.name}`,
                           msg2:'Hello2',
                           msg3:"Hello3" ,
                           msg4:`Hello4 ${req.query.surname}`,
                           //obj.property.property
                           testkey:req.query.name
                        })
}
 
//3. Export Area
export default handler;