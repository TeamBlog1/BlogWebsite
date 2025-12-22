<!Doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport"
content="width=device=width, initial-scale=1.0">
    <title>Sign In | TechCrunch</title>
<link
href="https://cdn.jsdelivr.net/npm/remix icon@4.3.0/fronts/remixicon.css"
rel="stylesheet" />
    <style>

    html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)),
        url('https://images.unsplash.com/photo-1451187534959-5e5667753e1e?auto=format&fit=crop&w=1920&q=80');
    backgound-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
    font-family: 'Segoe UI' , sans-serif;
}
nav{
background: rgba(0,0,0,0.85);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-bottom: 3px solid #c55151;
    position: sticky;
    top: 0;
    z-index: 1000;
}
nav a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: 0.3;
}
nav a: hover { color #c55151; }
.logo-nav {
color: #c55151 !important;
font-size: 1.5rem !important;
letter-spacing: 1px;
  margin-right: 20px;
}
.main-content{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}
.signin-card{
    background-color: rgba(31, 34, 41, 0.9);
    border: 1px solid #444;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    transition: transform 0.3s ease;
    padding: 40px;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    text-align: center;
}
.signin-card:hover { transform: translateY(-5PX); }
h2 { color: #c55151; margin-bottom: 25px; }
.input-group { text-align: left; margin-bottom: color: #ccc; font-size: 0.9rem;
             }
input{
width: 100%;
    padding: 12px;
    margin-top: 5px;
    border-radius: 8px;
    background-color: #1a1c22;
    color: white;
    outline: none;
    transition: border-color 0.3s;
    box-sizing: border-box;
}
input:focus { border-color: #c55151; }
button[type="submit"] {
width: 100%;
    padding: 12px;
    background-color: #c55151;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
}
button[type="submit"]:hover {
background-color: #a33f3f;
    box-shadow: 0 5px 15px rgba(197, 81, 0.4);
}
footer{
background: rgba(0,0,0,0.9);
    color: #888;
    text-align: center;
    padding: 30px 0;
    border-top: 2px solid #c55151;
}
.footer-names { color: #ffffff; margin-bottom: 10px; }
.footer-names b { color: #c55151; }
</style>
    </head>
<body>
    <nav>
    <a href="index.html" class="logo-nav">TechCrunch<a/>
    <a href="index.html">home<a/>
    <a href="reviews.html">Reviews<a/>
    <a href="profile.html">Profile<a/>
    <a href="signin.html" style="color: #c55151;">sign in<a/>
    </nav>
<main class="main-content">
    <div class="signin-card">
    <h2>Sign In</h2>
<form id="loginForm">
    <div class="input-group">
    <label>Email Address</label>
<input type="email" id="email" placeholder="email@shembull.com">
    </div>
<div class="input-group">
    <label>Password</label>
<input type="password" id="password" placeholder="******">
    </div>
<button type="submit">Log In</button>
<p id="error-msg" style="color: #ff4d4d; font-size: 14px; margin-top: 15px; display: none;"></p>
<p id="success-msg" style="color: #2ecc71; font-size: 14px; margin-top: 15px; display: none;"></p>
    </form>
    </div>
</main>
<footer>
   <div class="footer-names">
    &copy; 2025 TechCrunch Blog - Punuar nga <b>Grejona</b> & <b>Jeta</b>
    </div>
<p>Projekti Grupor | Faqja e Kyçjes</p>
    </footer>

<script src="signin.js"></script>
    </body>
    </html>
