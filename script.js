
    //     function addData(order, item) {
    //         let x = 0; // Incentive for orders
    //         let y = 0; // Incentive for items

    //         // Calculate incentive for orders
    //         if (order >= 150) {
    //             x = order * 5;
    //         } else if (order >= 100) {
    //             x = order * 3;
    //         } else if (order >= 50) {
    //             x = order * 1;
    //         } else {
    //             x = 0; // No incentive for orders below 50
    //         }

    //         // Calculate incentive for items
    //         if (item > 450) {
    //             y = item * 0.1; // 10% incentive for items above 450
    //         } else {
    //             y = 0; // No incentive for items 450 or below
    //         }

    //         const totalIncentive = x + y; // Total incentive
    //         alert(`Total incentive is:, ${totalIncentive} `);
    //         return totalIncentive;
           
    //     }

    //    document.querySelector(".button").addEventListener('click', function(e) {
    //         e.preventDefault();
    //         addData(orderValue, itemValue);
            
        

    //     const orderValue = document.getElementById("oI").value;
    //     const itemValue = document.getElementById("iI").value;

    //     addData(orderValue, itemValue);

    //     if(isNaN(orderValue) || isNaN(itemValue)) {
    //         alert('Please enter valid numbers for orders and items.');
            
    //     }})

       
       
    // function addData(order, item) {
    //     let x = 0; // Incentive for orders
    //     let y = 0; // Incentive for items
    
    //     // Calculate incentive for orders
    //     if (order >= 150) {
    //         x = order * 5;
    //     } else if (order >= 100) {
    //         x = order * 3;
    //     } else if (order >= 50) {
    //         x = order * 1;
    //     } else {
    //         x = 0; // No incentive for orders below 50
    //     }
    
    //     // Calculate incentive for items
    //     if (item > 450) {
    //         y = item * 0.1; // 10% incentive for items above 450
    //     } else {
    //         y = 0; // No incentive for items 450 or below
    //     }
    
    //     const totalIncentive = x + y; // Total incentive
    //     alert(`Total incentive is: ${totalIncentive}`); // Display result in an alert
    //     return totalIncentive;
    // }
    
    // // Attach event listener to the button
    // document.querySelector(".button").addEventListener("click", function (e) {
    //     e.preventDefault(); // Prevent default form submission
    
    //     // Get input values and convert them to numbers
    //     const orderValue = Number(document.getElementById("oI").value);
    //     const itemValue = Number(document.getElementById("iI").value);
    
    //     // Validate input values
    //     if (isNaN(orderValue) || isNaN(itemValue)) {
    //         alert("Please enter valid numbers for orders and items.");
    //         return;
    //     }
    
    //     // Call the function with the input values
    //     addData(orderValue, itemValue);
    // });

    // ? part 2

    function addData(order, item) {
        let x; // Incentive for orders
        let y; // Incentive for items
    
        // Calculate incentive for orders
        if (order >= 150) {
            x = order * 5;
        } else if (order >= 100) {
            x = order * 3;
        } else if (order >= 50) {
            x = order * 1;
        } else {
            x = 0; // No incentive for orders below 50
        }
    
        // Calculate incentive for items
        if (item > 450) {
            y = item * 0.1; // 10% incentive for items above 450
        } else {
            y = 0; // No incentive for items 450 or below
        }

       
         // Store order value for display
        const totalIncentive = x + y; // Total incentive
        return totalIncentive; // Return the calculated incentive
    }
    
   // Attach event listener to the button
    
   let btn = document.querySelector(".button");
   let resultElement = document.querySelector(".result");
   
   btn.addEventListener("click",()=>{
       resultElement.classList.add('resultTwo') // Set text color to black
   })

    btn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default form submission
        
    
        // Get input values and convert them to numbers
        const orderValue = Number(document.getElementById("oI").value);
        const itemValue = Number(document.getElementById("iI").value);
    
        // Validate input values
        if (isNaN(orderValue) || isNaN(itemValue)) {
            document.querySelector(".result").textContent = "Please enter valid numbers for orders and items.";
            return;
        }
    
        // Call the function with the input values
        const totalIncentive = addData(orderValue, itemValue);
    
        // Display the result in the .result div

        let resultDiv = document.querySelector(".result").textContent = ` Total incentive is = ${totalIncentive}`;
        

    });


     