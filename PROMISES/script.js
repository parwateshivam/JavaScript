let validateUser = (userName, password) => {
  let myPromise = new Promise((resolve, reject) => {
    if (userName === "shivam") {
      if (password === "pass@123") {
        setTimeout(() => {
          resolve(
            {
              message: "you can log in",
              myStatus: "validate"
            }
          )
        }, 2000);
      }
    } else {
      reject(
        {
          message: "you cannot log in",
          myStatus: "not validate"
        }
      )
    }
  })
  return myPromise;
}

//using then and catch

validateUser("shivam", "pass@123").then((result) => {
  console.log(result);
}).catch((result) => {
  console.error(result);
})

//using async and await

let getData = async () => {
  let data = await validateUser("shivam", "pass@123");
  console.log(data);
}

getData();