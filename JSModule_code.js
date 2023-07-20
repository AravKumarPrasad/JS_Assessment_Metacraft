/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTa = []

/*This function takes some values ​​as parameters and 
creates an NFT object with the parameters passed as 
metadata and saves it in the above variable. */

function mintNFT (first_name , last_name ,age , user_id , email) {
    const NFT_DATA = {
        "F_Name" : first_name,
        "L_Name" : last_name,
        "Age" : age,
        "User_ID" : user_id,
        "Email" : email  
    }
    NFTa.push(NFT_DATA);
    console.log("Information: " + first_name + " " + last_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for (let i = 0; i<NFTa.length; i++){
    console.log("\nID: " + (i+1));
    console.log("F_Name: " + NFTa[i].F_Name);
    console.log("L_Name: " + NFTa[i].L_Name);
    console.log("Age: " + NFTa[i].Age);
    console.log("User_ID: " + NFTa[i].User_ID);
    console.log("Email: " + NFTa[i].Email);

}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTa.length);
}

// call your functions below this line
mintNFT("Arav", "Kumar", "20", "21bcs3681","arav1232gmail.com");
mintNFT("Ananya", "Misra", "26", "21bcs3743" ,"ananyamisra@gmail.com");
mintNFT("Aman", "Rana", "30", "21bcs3676" ,"amanrana234@gmail.com");
mintNFT("Arun", "Kumar", "50", "21bcs9990" ,"arunkumar@gmail.com");
mintNFT("Nisha", "Verma", "10", "21bcs1140" ,"nishaverma1039@gmail.com");
listNFTs();
getTotalSupply();
