var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s12 m7">
							<div class="row">
								<div class="signup-box">
									<h1 class="title">JSGRAM</h1>
									<form class="signup-form">
										<div class="section">
											<a class="btn btn-fb hide-on-small-only">Iniciar sesión en Facebook</a>
											<a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
										</div>
										<div class="divider"></div>
										<div class="section"></div>
											<input type="text" name="username" placeholder="Nombre de usuario"/>
											<input type="password" name="pasword" placeholder="Contraseña"/>
											<button class="btn waves-effect waves-light">Inicia sesión</button>
									</form>	
								</div>
							</div>
							<div class="row">
								<div class="login-box">
									¿No tienes una cuenta? <a href="/signup">Registrate</a>
								</div>
							</div>`

module.exports = landing(signinForm);

