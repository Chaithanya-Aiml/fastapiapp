import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CompanyCard from "./components/CompanyCard";
import JobCard from "./components/JobCard";
import type {Company} from "./types/company";
import {useEffect, useState} from "react";
import {getCompanies} from "./Services/CompanyService";

function App(){
  const [loading,setLoading] = useState(true);
  const [companies,setCompanies] = useState<Company[]>([]);
  const [error,setError] = useState<string | null>(null);

  async function fetchCompanies() {
    setLoading(true);
    try {
      const companies = await getCompanies();
      setCompanies(companies);
    } catch (error) {
      setError("error");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchCompanies();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return(
    <>
    <Welcome/>
    <NavBar/>
    <br/>

    <CompanyCard key={companies.id}
    companies={companies}/>

    <JobCard/>
    <Footer/>
    </>
    
  )
}
export default App