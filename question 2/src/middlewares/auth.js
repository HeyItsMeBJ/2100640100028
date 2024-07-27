const auth = async (req, res,next) => {

  const resopnse = await fetch(`http://20.244.56.144/test/auth`, {
    method: "POST",
    body: JSON.stringify({
      companyName: "Hindustan College of Science & Technology",
      clientID: "af9a2575-70a6-41dc-adf9-8b236d168de9",
      clientSecret: "QCBhYVOSYPRebSNE",
      ownerName: "Bhupesh Jain",
      ownerEmail: "bhupeshjain3221@gmail.com",
      rollNo: "2100640100028",
    }),
  });
 
console.log(resopnse)
  if (resopnse.status != 201)
    return res.status(400).json({ error: "Invalid Authentication" });
  next();
}; 


export { auth };
