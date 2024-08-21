window.addEventListener("load", () => {
    Swal.fire({
      title: "Apa kamu pengen memutar musik tar?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya",
      cancelButtonText: "Engga",
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector(".song").play();
        animationTimeline();
      } else {
        animationTimeline();
      }
    });
  });
  
  