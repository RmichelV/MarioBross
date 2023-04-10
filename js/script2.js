$(document).ready(function() {
			$("#reserva-form").submit(function(e) {
				e.preventDefault(); // Evita que el formulario se envíe por defecto
				$.ajax({
					url: "reservar.php",
					type: "POST",
					dataType: "json",
					data: $("#reserva-form").serialize(),
					success: function(respuesta) {
						if(respuesta.exito) {
							// La reserva fue exitosa, mostramos la confirmación y los enlaces para descargar los boletos
							var mensaje = "Reserva realizada con éxito. Descarga tus boletos:<br>";
							for(var i = 0; i < respuesta.boletos.length; i++) {
								mensaje += "<a href='" + respuesta.boletos[i] + "' target='_blank'>Boleto " + (i+1) + "</a><br>";
							}
							$("#confirmacion").html(mensaje);
						} else {
							// La reserva no fue exitosa, mostramos el mensaje de error
							$("#confirmacion").html(respuesta.mensaje);
						}
					},
					error: function() {
						// Error en la solicitud AJAX
						$("#confirmacion").html("Error al procesar la solicitud.");
					}
				});
			});
		});
	