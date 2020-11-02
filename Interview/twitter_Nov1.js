1. Your Life in a Tweet
Tell us the story of your life in Tweet(s). A Tweet is an update you post on Twitter and can be up to 280 characters. 
If needed, you may create a Tweetstorm (collection of Tweets).

Software engineer proficient in Ruby, JavaScript, React. 
Graduate of coding boot camp. 
Has a PhD in Biochemistry. 
Former academician. 
Likes to collaborate and improve the lives of others. 
Looking to continue to learn and interested in working with web technologies. 
Mother of two.

2. You Favorite Programming Project
Tell us about your favorite programming project.

Reunited Hands is a web application that I developed a couple of months ago. 
This application connects donors with surplus items to nonprofit organizations. 
It is built on a React front-end, Ruby on Rails back-end with PostgreSQL database. 
It allows admins to add an existing charity and then make a list of items needed in that organization. 
Users are able to choose one of the cities in Washington state and reach the organizations that locates in the selected city. 
After viewing the details of the listed charities and their requests, the application lets the user choose an item to donate. 
This application has full JSON Web Tokens / bcrypt Auth and its user interface is improved by implementing Semantic UI React. 
Reunited Hands is a project that I am proud of because it helps me to contribute to enhancing the lives of others and this is a huge motivation for me to keep learning and programming.

3. A Challenge You Conquered
Tell us about a problem that challenged you while you were learning, but you ultimately conquered?

When I started to build my donation application; Reunited Hands, I did not know how to separate administration and end-user view. 
After discussing the details of the challenge with my peers and searching for possible solutions online, I learned that implementing a user role/permission mechanism will be a nice approach. 
I ended up adding a flag to admins and marked them having different accesses. 
This helped me to trigger different events in different parts of the application.

I did not allow intellectual or emotional challenges that I anticipated to stop me to reach my goal, while I was working on my project. 
Getting feedback from my peers and taking personal responsibility for continuous learning using additional sources such as online classes and technical books always help me to overcome intellectual challenges, whereas being kind to myself, reframing failure as a new learning opportunity, and recognizing my success help me to overcome emotional challenges such as imposter syndrome. 

4. Autoscale Policy

function finalInstances(instances, averageUtil) {
    // Create a variable to keep track of updated instances
    // and set it to number of given instances
    let result = instances
    let i = 0
    // Loop through the array of average utilization of every second
    while(i < averageUtil.length) {
        if (averageUtil[i] < 25 && result > 1) {
            result = Math.ceil(result/2) 
            i = i + 11
        } else if (averageUtil[i] > 60 && result <= Math.pow(10, 8)) {
            result = result*2
            i = i + 11
        // Take no action and move to next, after checking edge cases
        } else {
            i++
        } 
    }
    // Return the final number of instances
    return result
}

5. Slot Machine 2.0

function slotWheels(history) {
    // Create an empty array to hold sorted spins
    let arr = []
    // Loop through the given array to sort the each string of spins
    for (let i of history) {
        arr.push(i.split('').sort((a,b) => (b-a)))
    }
    // Define a variable to hold the highest value of stops need to be taken for each spin 
    let max = []
    // Define another variable to keep track of the total stops
    let result = 0
    // Loop through 2D array horizantally
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // Push the first item of each row to variable called max
            max.push(arr[j][i])
        }
        // Add the highest value of "max" to the "result" array
        result = result + Math.max(...max)
        // Empty "max" array before start checking the second item of each row
        max = []
    }
    // Return the calculated total stops
    return result
}
