# Health care
# React + Typescript + Vite

A React-based web application for browsing doctors, filtering by specialty and availability, booking appointments, and viewing scheduled appointments. Built with Vite, TypeScript, Tailwind CSS, and React Router, the app fetches doctor data from a public API and stores appointments in local storage.

GitHub Repository 
[https://github.com/https://github.com/omargamal510/HealthCare](https://github.com/omargamal510/HealthCare)

# Setup Instructions

Steps

* Clone the Repository

git clone https://github.com/ogamal0111/clinic-reservation-app.git
cd clinic-reservation-app



Install Dependencies

npm install



``` Run the Development Server

npm run dev

Open http://localhost:5173 in your browser to view the app.



Build for Production (optional)

npm run build

The production-ready files will be in the dist folder.

How AI Tools Were Used


Prerequisites





Node.js: Version 18 or higher



npm: Version 9 or higher



A modern web browser (e.g., Chrome, Firefox)

Steps





Clone the Repository

git clone https://github.com/ogamal0111/clinic-reservation-app.git
cd clinic-reservation-app



Install Dependencies

npm install



Run the Development Server

npm run dev

Open http://localhost:5173 in your browser to view the app.



Build for Production (optional)

npm run build

The production-ready files will be in the dist folder.

How AI Tools Were Used





Grok (xAI): Used to generate and enhance React components, ensuring clean code and accessibility. Grok assisted in:





Adding ARIA attributes to components (App, DoctorBooking, DoctorCard, etc.) for better screen reader support.



Debugging and optimizing filter logic in DoctorFilter and Doctors for specialty and availability filtering.



Structuring the project with Vite and Tailwind CSS, including routing setup with react-router-dom.



Providing suggestions for clean code practices, such as meaningful variable names and small, reusable components.



Iterative Development: AI was used to refine components iteratively, ensuring TypeScript compatibility and responsive design with Tailwind CSS.

Known Limitations and Next Steps

Limitations





Frontend-Only Storage: Appointments are stored in local storage, which is not persistent across devices or browsers.



No Authentication: The app lacks user login, so anyone can view or book appointments.



API Dependency: Relies on a public gist API, which may become unavailable or outdated.



Basic Accessibility: While ARIA attributes are added, further testing with screen readers is needed.



Limited Error Handling: API failures or invalid data may cause unhandled errors.

Next Steps





Backend Integration: Add an Express.js backend with MongoDB for persistent storage, leveraging previous experience with Mongoose.



User Authentication: Implement Google/GitHub login using NextAuth.js to secure user data.



Enhanced Accessibility: Conduct accessibility audits and add keyboard navigation support.



Testing: Write unit and integration tests using Jest and React Testing Library.



Deployment: Deploy the app to Vercel or Heroku for public access, with environment variables for API keys.



UI Improvements: Add a reset button for filters and improve mobile responsiveness.
