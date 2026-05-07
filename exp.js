<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Clean Water Initiative</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

  <!-- Bootstrap Icons -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

  <style>

    :root{
      --primary:#0b4f6c;
      --secondary:#00b4d8;
      --dark:#023047;
      --light:#f4fbff;
    }

    body{
      font-family:'Trebuchet MS',sans-serif;
      background:var(--light);
      color:#333;
    }

    html{
      scroll-behavior:smooth;
    }

    /* Navbar */

    .navbar{
      background:var(--dark);
    }

    .navbar-brand{
      font-size:1.6rem;
      font-weight:bold;
    }

    .nav-link{
      color:white !important;
      margin-left:10px;
    }

    /* Hero */

    .hero{
      background:
      linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
      url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600');

      background-size:cover;
      background-position:center;

      color:white;
      text-align:center;
      padding:130px 20px;
    }

    .hero h1{
      font-size:3.8rem;
      font-weight:bold;
    }

    .hero p{
      margin-top:15px;
      font-size:1.2rem;
    }

    .hero .btn{
      margin-top:20px;
      padding:12px 30px;
      border-radius:10px;
      font-weight:bold;
    }

    /* Section Title */

    .section-title{
      font-size:2rem;
      font-weight:bold;
      color:var(--primary);
      border-left:6px solid var(--secondary);
      padding-left:12px;
      margin-bottom:30px;
    }

    /* Cards */

    .custom-card{
      background:white;
      border-radius:15px;
      overflow:hidden;
      box-shadow:0 5px 20px rgba(0,0,0,0.08);
      transition:0.3s;
      height:100%;
    }

    .custom-card:hover{
      transform:translateY(-8px);
    }

    .custom-card img{
      width:100%;
      height:220px;
      object-fit:cover;
    }

    .card-body{
      padding:25px;
    }

    /* Stats */

    .stat-box{
      background:white;
      padding:30px;
      border-radius:15px;
      text-align:center;
      box-shadow:0 5px 20px rgba(0,0,0,0.08);
    }

    .stat-box h2{
      color:var(--secondary);
      font-size:2.5rem;
      font-weight:bold;
    }

    /* Donation Box */

    .donation-box{
      background:white;
      padding:40px;
      border-radius:18px;
      box-shadow:0 5px 25px rgba(0,0,0,0.08);
    }

    /* Progress */

    .progress{
      height:28px;
      border-radius:20px;
      overflow:hidden;
    }

    .progress-bar{
      background:linear-gradient(90deg,#0b4f6c,#00b4d8);
      font-weight:bold;
    }

    /* Donate Amount Buttons */

    .amount-btn{
      border:2px solid #ddd;
      border-radius:10px;
      padding:15px;
      text-align:center;
      cursor:pointer;
      transition:0.3s;
      background:#fff;
      font-weight:bold;
    }

    .amount-btn:hover,
    .amount-btn.active{
      background:var(--primary);
      color:white;
      border-color:var(--primary);
    }

    /* Donate Button */

    .donate-btn{
      width:100%;
      border:none;
      padding:15px;
      border-radius:12px;
      background:linear-gradient(90deg,#0b4f6c,#00b4d8);
      color:white;
      font-size:1.1rem;
      font-weight:bold;
    }

    .donate-btn:hover{
      opacity:0.9;
    }

    /* Footer */

    footer{
      background:var(--dark);
      color:white;
      padding:50px 20px;
      margin-top:50px;
    }

    footer h5{
      margin-bottom:15px;
      font-weight:bold;
    }

    footer p{
      margin-bottom:8px;
    }

    footer i{
      color:#00b4d8;
    }

  </style>

</head>

<body>

<!-- Navbar -->

<nav class="navbar navbar-expand-lg navbar-dark sticky-top">

  <div class="container">

    <a class="navbar-brand" href="#">
      <i class="bi bi-droplet-fill me-2"></i>
      Clean Water Initiative
    </a>

    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menu">

      <ul class="navbar-nav ms-auto">

        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#impact">Impact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#donate">Donate</a>
        </li>

      </ul>

    </div>

  </div>

</nav>

<!-- Hero Section -->

<section class="hero">

  <div class="container">

    <h1>
      Non Profit Donation Campaign 2024
    </h1>

    <p>
      Help us provide safe and clean drinking water to villages around the world.
    </p>

    <a href="#donate" class="btn btn-light">
      Donate Now
    </a>

  </div>

</section>

<!-- About -->

<section class="py-5" id="about">

  <div class="container">

    <h2 class="section-title">
      Our Mission
    </h2>

    <div class="row g-4">

      <!-- Card 1 -->

      <div class="col-md-4">

        <div class="custom-card">

          <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600">

          <div class="card-body">

            <h4>Water Crisis</h4>

            <p>
              Millions of families still do not have access to clean drinking water.
            </p>

          </div>

        </div>

      </div>

      <!-- Card 2 -->

      <div class="col-md-4">

        <div class="custom-card">

          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600">

          <div class="card-body">

            <h4>Our Projects</h4>

            <p>
              We build wells, water filters, and sustainable clean water systems.
            </p>

          </div>

        </div>

      </div>

      <!-- Card 3 -->

      <div class="col-md-4">

        <div class="custom-card">

          <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600">

          <div class="card-body">

            <h4>Healthy Future</h4>

            <p>
              Clean water improves education, health, and quality of life.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- Impact -->

<section class="py-5 bg-white" id="impact">

  <div class="container">

    <h2 class="section-title">
      Our Impact
    </h2>

    <div class="row g-4">

      <div class="col-md-3">

        <div class="stat-box">

          <h2>200+</h2>
          <p>Villages Supported</p>

        </div>

      </div>

      <div class="col-md-3">

        <div class="stat-box">

          <h2>95K+</h2>
          <p>People Helped</p>

        </div>

      </div>

      <div class="col-md-3">

        <div class="stat-box">

          <h2>15</h2>
          <p>Countries</p>

        </div>

      </div>

      <div class="col-md-3">

        <div class="stat-box">

          <h2>70%</h2>
          <p>Disease Reduction</p>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- Fundraising -->

<section class="py-5">

  <div class="container">

    <div class="donation-box">

      <h2 class="section-title">
        Fundraising Goal
      </h2>

      <p>
        Goal: ₹15,00,000
      </p>

      <div class="progress mb-3">

        <div class="progress-bar" style="width:75%">
          75%
        </div>

      </div>

      <p>
        ₹11,25,000 raised so far.
      </p>

    </div>

  </div>

</section>

<!-- Donate -->

<section class="py-5" id="donate">

  <div class="container">

    <div class="donation-box">

      <h2 class="section-title">
        Donate Today
      </h2>

      <form>

        <div class="row g-3">

          <div class="col-md-6">

            <label class="form-label">
              Full Name
            </label>

            <input type="text" class="form-control" placeholder="Enter your name">

          </div>

          <div class="col-md-6">

            <label class="form-label">
              Email
            </label>

            <input type="email" class="form-control" placeholder="Enter your email">

          </div>

        </div>

        <!-- Donation Amounts -->

        <div class="row g-3 mt-3">

          <div class="col-md-3">
            <div class="amount-btn active">
              ₹500
            </div>
          </div>

          <div class="col-md-3">
            <div class="amount-btn">
              ₹1000
            </div>
          </div>

          <div class="col-md-3">
            <div class="amount-btn">
              ₹5000
            </div>
          </div>

          <div class="col-md-3">
            <div class="amount-btn">
              ₹25000
            </div>
          </div>

        </div>

        <!-- Message -->

        <div class="mt-4">

          <textarea class="form-control" rows="4"
            placeholder="Write your message"></textarea>

        </div>

        <!-- Donate Button -->

        <button class="donate-btn mt-4">

          <i class="bi bi-heart-fill me-2"></i>
          Donate Now

        </button>

      </form>

    </div>

  </div>

</section>

<!-- Footer -->

<footer>

  <div class="container">

    <h4>
      Clean Water Initiative
    </h4>

    <p>
      Non Profit Donation Campaign 2024
    </p>

    <p>
      Bringing safe and clean drinking water to rural communities.
    </p>

    <hr style="border-color:rgba(255,255,255,0.3);">

    <div class="row text-start mt-4">

      <!-- Contact -->

      <div class="col-md-4 mb-3">

        <h5>
          <i class="bi bi-telephone-fill me-2"></i>
          Contact Us
        </h5>

        <p>
          +91 98765 43210
        </p>

        <p>
          support@cleanwaterinitiative.org
        </p>

      </div>

      <!-- Address -->

      <div class="col-md-4 mb-3">

        <h5>
          <i class="bi bi-geo-alt-fill me-2"></i>
          Address
        </h5>

        <p>
          Pune, Maharashtra, India
        </p>

      </div>

      <!-- Social Media -->

      <div class="col-md-4 mb-3">

        <h5>
          <i class="bi bi-share-fill me-2"></i>
          Follow Us
        </h5>

        <p>
          <i class="bi bi-facebook me-2"></i>
          Facebook
        </p>

        <p>
          <i class="bi bi-instagram me-2"></i>
          Instagram
        </p>

        <p>
          <i class="bi bi-twitter-x me-2"></i>
          Twitter
        </p>

      </div>

    </div>

    <hr style="border-color:rgba(255,255,255,0.3);">

    <p class="mt-3 text-center">
      © 2024 Clean Water Initiative | All Rights Reserved
    </p>

  </div>

</footer>

<!-- Bootstrap JS -->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
