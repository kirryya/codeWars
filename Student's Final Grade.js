function finalGrade (exam, projects) {
    const perfect = 100;
    const good = 90;
    const normal = 75;
    const bad = 0;
   
     if (exam > 90 || projects > 10) {
       return perfect; 
     }
     
     if (exam > 75 && projects >= 5) {
       return good; 
     }
   
     if (exam > 50 && projects >= 2) {
       return normal; 
     }  
     
     if (exam >= 0 && projects >= 0) {
       return bad; 
     }
   }