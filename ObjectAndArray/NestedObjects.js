/* Activity - 1. Use the object given here 
   2. Update the first and last properties with your details
   3. Add new property isProMember to the status and set it to false. */


const userDetails = {
    name: {
      first: "Kapil",
      last: "Raghuwanshi",
    },
    jobTitle: "JS Instructor @ Crio.do",
    email: {
      work: "kapil@epsilon.com",
      personal: "",
    },
    status: {
      isOnline: true,
      isVerified: false,
    }
  }

  userDetails.name.first = 'Naveen';
  userDetails.name.last = 'kumar';
  userDetails.isProMember = true ;

  console.log(userDetails);
  