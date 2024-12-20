import Post from "../types/post";

const posts: Post[] = [
  {
    id: 1,
    date: "12/20/2024",
    title: "ShoreCasts Admin Dashboard",
    body: `"The past two weeks on the ShoreCasts engineering team, have been spent developing an admin dashboard to help our team analyze, create, update and remove database objects from our production environment. The main driving force behind building this application is the need to manage and groom our data that has been persistently growing, and expanding since beginning to develop this product at the start of this year.  The main data our team is focused on at this stage of the product is the Marinas, Boat Ramps, & Tackle Shops that we provide our Users access to. Earlier this year, after scraping Google for information on these entities based on specific use-case parameters, we filled our database with over 9,000 combined Marinas, Boat Ramps & Tackle Shops across every US coastal state.

            The information for these entities (name, city, state, address, description, phone number, hours, etc.) was extracted into CSV files on a local machine, and then parsed over to transfer and load the data into our database. After completing this process over the span of a few weeks, the team began to notice there were quite a few Boat Ramps, Marinas, & Tackle Shops that had information entered into their Google Business profiles, that needed updating for accuracy, legibility, and relevance purposes on our application.

            We are always striving to provide our Users with the most accurate, informative and detailed information to help them plan their fishing trips.  By developing this admin dashboard we will be able to better manage and take control of our data provided to Users without having to SSH into the production environment and manually update fields individually.

            The main requirements for this project were as follows:
            1. Create a login process that prevents unwanted access to the production server
            2. Create a table that allows the user to View all Marinas, Boat Ramps, & Tackle Shops ordered by State, City, Type, Name, and whether the object has been reviewed before.
            3. Develop a form that allows the user to create new Marinas, Boat Ramps, & Tackle Shops in the database
            4. Develop a form that allows the user to update an object in the database after its ID has been selected from the table
            5. Add functionality that allows the user to remove an object from the database 
            6. Develop a way for the user to filter data by the State that they are located in
            7. Allow users to view only objects in the database that have matching Latitude & Longitude fields

            Solutions (In same order as requirements)
            1. By implementing a JWT authentication process, we were able to achieve our goal of securing this interface to only users that have been authorized to access it.
            2. Utilized React's <table> component to provide a UI that Users can view all entities ordered by State, City, Type, Name, Reviewed thanks to SQL
            3. Create form developed utilizing React's <form> component, errors raised on all required fields.
            4. Update form implemented by passing the selected entity's data and passing it into placeholders for each input field. Update form errors are raised on incorrect User input.
            5. Delete functionality added inside of Update Form. User must click the 'Delete' button, which will trigger a hidden field to appear below this button asking the user to select a checkbox if they are sure they want to delete the entity. This prevents unwanted removal of data form our environment.
            6. Pop-up modal developed that allows user to select which State they would like to view data for.
            7. Added button to Navbar, titled "Find Duplicates" which will then display all duplicate matching coordinates in the database. This is to help move markers on the Google Maps interface implemented on the iOS and Android apps. Our team noticed through testing that when a Boat Ramp and a Marina have the same Latitude & Longitude, it makes it difficult to distinguish between the 2 markers on the application.
            The ShoreCasts team is excited to continue developing applications that help provide access to the most reliable and informative data on Marinas, Tackle Shops, and Boat Ramps in the US."`
  }
]

export default posts