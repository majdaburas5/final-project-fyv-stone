<!-- style for opinion page-->
<style>
.card{
  position:relative;
  width:350px;
  height:400px;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#060c21;
}

.card:before{
  content:'';
  position:absolute;
  top:-2px;
  left:-2px;
  bottom:-2px;
  right:-2px;
  background:#fff;
  z-index:-1;
}

.card:after{
  content:'';
  position:absolute;
  top:-2px;
  left:-2px;
  bottom:-2px;
  right:-2px;
  background:#FFA500;
  z-index:-2;
  filter:blur(40px);
}

.card:before,
.card:after{
  background:linear-gradient(#FFA500);
}

.content{
  color:#fff;
  padding:2em;
  text-align:center;
}

.content h2{
  font-size:2em;
}

.content p{
  font-size:1.2em;
  line-height:1.5em;
}
.button-black {
  background-color:black;
  border-radius: 100px;
  box-shadow: black;
  color:white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-white{
  background-color:#DBE4E5;
  border-radius: 100px;
  box-shadow: black;
  color:white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-brown{
  background-color:#9A770A;
  border-radius: 100px;
  box-shadow: black;
  color:white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-blue{
  background-color:blue;
  border-radius: 100px;
  box-shadow: black;
  color:white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-gray{
  background-color:gray;
  border-radius: 100px;
  box-shadow: black;
  color:white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  box-shadow: black;
  transform: scale(1.05) rotate(-1deg);
}
input[type=radio] {
    width: 60%;
    height: 1.8em;
}
</style>
<?php 
//database connection
    include "DB1connect.php";
    $conn = mysqli_connect("localhost", "majd", "1234", "project1");
//navbar
    require_once "nav2.php";
?>
<html>
<body>
<h3 style="color:black; font-family: Garamond, serif ;font-size:70px" align="center">GIVE YOUR OPINION</h3><br />
<form method="POST">
        <div class="table-responsive">
            <table class="table table-bordered" style="background-color:white">
                <tr>
                <!-- id for wall input text to collect the value-->
                    <td rowspan="3" style="text-align:center">How Much Wall Effect In % ?<input type="text" name="effect7" id="7" value="1" class="form-control" style="text-align:center" /></td>
                </tr>
                <tr>
                    <td width="10%" style="color:black;padding-top:17px;font-size:30px;text-align:center">Wall</td>
                    <td style="background:gray"><input type="radio" name="color1" style="accent-color:gray" id="1" value="1"><br/><label for="1" style="color:white">&nbsp&nbsp Gray</label></td>
                    <td style="background:black"><input type="radio" name="color1" style="accent-color:black" id="2" value="2"><br/><label for="2" style="color:white">&nbsp&nbsp Black</label></td>
                    <td style="background:white"><input type="radio" name="color1" style="accent-color:white" id="3" value="3"><br/><label for="3">&nbsp&nbsp White</label></td>
                    <td style="background:blue"><input type="radio" name="color1" style="accent-color:blue" id="4" value="4"><br/><label for="4" style="color:white">&nbsp&nbsp Blue</label></td>
                    <td style="background:#964B00"><input type="radio" name="color1" style="accent-color:#964B00" id="5" value="5"><br/><label for="5" style="color:white">&nbsp&nbsp Brown</label></td>

                </tr>
              </table>
        </div>
        <br/>
<h1 id="match1" style="color:black;size:20px"></h1>
        <div class="table-responsive">
            <table class="table table-bordered" style="background-color:white">
                <tr>
                    <!-- id for closet input text to collect the value-->
                    <td rowspan="3" style="text-align:center">How Much Closet Effect In % ?<input type="text" name="effect8" id="8" value="1" class="form-control" style="text-align:center"/></td>
                </tr>
                <tr>
                    <td width="10%" style="color:black;padding-top:17px;font-size:30px;text-align:center">Closet</td>
                    <td style="background:gray"><input type="radio" name="color2" style="accent-color:gray" id="1" value="1"><br/><label for="1" style="color:white">&nbsp&nbsp Gray</label></td>
                    <td style="background:black"><input type="radio" name="color2" style="accent-color:black" id="2" value="2"><br/><label for="2" style="color:white">&nbsp&nbsp Black</label></td>
                    <td style="background:white"><input type="radio" name="color2" style="accent-color:white" id="3" value="3"><br/><label for="3">&nbsp&nbsp White</label></td>
                    <td style="background:blue"><input type="radio" name="color2" style="accent-color:blue" id="4" value="4"><br/><label for="4" style="color:white">&nbsp&nbsp Blue</label></td>
                    <td style="background:#964B00"><input type="radio" name="color2" style="accent-color:#964B00" id="5" value="5"><br/><label for="5" style="color:white">&nbsp&nbsp Brown</label></td>
                </tr>
              </table>  
        </div>
        <br/>
<h1 id="match2" style="color:black;size:20px"></h1>
        <div class="table-responsive">
            <table class="table table-bordered" style="background-color:white">
                <tr>
                    <!-- id for floor input text to collect the value-->
                    <td rowspan="3" style="text-align:center">How Much Floor Effect In % ?<input type="text" name="effect9" id="9" value="1" class="form-control" style="text-align:center"/></td>
                </tr>
                <tr>
                    <td width="10%" style="color:black;padding-top:17px;font-size:30px;text-align:center">Floor</td>
                    <td style="background:gray"><input type="radio" name="color3" style="accent-color:gray" id="1" value="1"><br/><label for="1" style="color:white">&nbsp&nbsp Gray</label></td>
                    <td style="background:black"><input type="radio" name="color3" style="accent-color:black" id="2" value="2"><br/><label for="2" style="color:white">&nbsp&nbsp Black</label></td>
                    <td style="background:white"><input type="radio" name="color3" style="accent-color:white" id="3" value="3"><br/><label for="3">&nbsp&nbsp White</label></td>
                    <td style="background:blue"><input type="radio" name="color3" style="accent-color:blue" id="4" value="4"><br/><label for="4" style="color:white">&nbsp&nbsp Blue</label></td>
                    <td style="background:#964B00"><input type="radio" name="color3" style="accent-color:#964B00" id="5" value="5"><br/><label for="5" style="color:white">&nbsp&nbsp Brown</label></td>

                </tr>
            </table>
        </div>
        <br/>
<br/><br/>
<button onclick="match()" style="color:black;background:white;font-size:20px;font-weight:bold">match</button>
<br/><br/>
<h1 id="demo" style="color:red;size:70px"></h1>
<script>
function match()
{
  //document.querySelector.checked to take the value of each checked color that I have insert "1,2,3,4,5"
  var wall = document.querySelector('input[name="color1"]:checked').value;
  var closet = document.querySelector('input[name="color2"]:checked').value;
  var floor = document.querySelector('input[name="color3"]:checked').value;
  //document.getElementById.value to take the value of each input
  //parseInt to make it input type
  // /100 because the customer insert a value in % and i make it like 40% -->0.4 to make the * between the
  //input and the cheked color and make the sum + between the all to make the correct match for the customer
  //to help them choose the correct marble for his home
  var txt2= parseInt(document.getElementById("7").value)/100;
  var txt5= parseInt(document.getElementById("8").value)/100;
  var txt8= parseInt(document.getElementById("9").value)/100;
  var sumtxt=txt2+txt5+txt8;
  document.cookie="total=";
  if(sumtxt==1){
  var total=(wall*txt2)+(closet*txt5)+(floor*txt8);
  //Math.round function make the number 3.4 --> 3.00 to show the customer the marbels color number 3 
  var tot=Math.round(total);
  //save in cookie to work with it in php also (take value in java script to php)
  document.cookie ="total="+tot;
  location.reload();
   } 
}
</script>
  <?php 
  $res="";
  if(isset($_COOKIE['total'])){
    $res=$_COOKIE['total'];
    //when i enter the opinion page for the first time i want to see it clean
    setcookie('total','',time()-3600);
    //show the customer the marbels 
    $query2 = "SELECT * FROM marble where color = $res";
    $query_run2 = mysqli_query($conn, $query2);
    if(mysqli_num_rows($query_run2) > 0){
      foreach($query_run2 as $row){
    ?>
    <div class="col-md-4">	
    <form method="post">
    <br>
    <div class="card" style="border:1px; background-image:url();background-color:white; border-radius:20px; padding:16px;" align="center"> 
        <h4 style="color:black"><?php echo "<img src=images/".$row['img']. " width='280px' height='130px' "?></h4>
        <h4 style="color:black">name: <?php echo $row["name"] ?></h4>
        <h4 style="color:black">price: <?php echo $row["price"] ?> ₪</h4>
        <h4 style="color:black">code: <?php echo $row["code"] ?></h4>
        <input type="hidden" name="img" value="<?php echo $row["img"]; ?>" />
        <input type="hidden" name="name" value="<?php echo $row["name"]; ?>" />
        <input type="hidden" name="price" value="<?php echo $row["price"]; ?>" />
        <input type="hidden" name="code" value="<?php echo $row["code"]; ?>" />  
    </div>
  </form>
  </div>
<?php
      }
    }  
  }
?>
</form>
</body>
</html>

