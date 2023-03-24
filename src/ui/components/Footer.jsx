function Footer() {



   
    return (
  
      <>
  <div className="FooterBg text-center text-dark rounded-top mt-5" >
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">

      {/* <!-- linkedin --> */}
      <a
        className="btn text-dark btn-floating m-1"
       
        href="https://www.linkedin.com/in/alex-cabral-951887231/"
        role="button"
        ><i className="fab fa-instagram"></i
      >
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" width = '45' alt="" />
      </a>

      {/* <!-- Github --> */}
      <a
        className="btn text-dark btn-floating m-1"
       
        href="https://github.com/Alexcab24"
        role="button"
        ><i className="fab fa-github"></i
      >
      <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" width = '45' alt="" />
      </a>
    </section>
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" 
  
  >
    © 2023 Copyright:
    <a className="text-dark" href=""> Alex Cabral</a>
  </div>
</div>
      </>
    );
  }
  
  export default Footer;