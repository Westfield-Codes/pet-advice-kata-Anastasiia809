/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */

// Create pet variable, set equal to empty quotes ("")
var pet = "";
// Ask if they are allergic, store in a boolean variable with OK/Cancel
var allergic = confirm("Are you alergic on pets?");
// If they are allergic, ask if they want a cute pet, store in a boolean variable with OK/Cancel
if (allergic) var cute = confirm("Do you wanna a cute pet?");
// If they are not allergic, ask if they want to be outdoors with their pet.  Store it in a boolean with OK/Cancel.
else if (!allergic) var outside = confirm("Do you like being outside?");
// If allergic and cute, pet =  bird
if (allergic && cute) pet = "bird";
// Else if allergic and not cute,  pet =  tarantula
else if (allergic && !cute) pet = "tarantula";
// Else if not allergic and outdoors,  pet =  dog
else if (!allergic && outside) pet = "dog";
// Else if not allergic and indoors,  pet =  cat 
else if (!allergic && !outside) pet ="cat";
// Display the type of pet: You would do well with a pet
alert("You would do well with a " + pet);
// Ask for a pet name for the pet starting with the same letter as the pet starts with
 var petName = prompt("How do you call your pet?");
// Display petname the pet says hi. 
alert(petName + ":" + " Hi!");
