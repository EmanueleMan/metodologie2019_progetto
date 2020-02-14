package it.uniroma1.fabbricasemantica.data;

import it.uniroma1.metodologie2019.hw3.WordNet;

/**
 * Questa classe restituisce i dati necessari per il task ricevuto in input.
 * Il metodo {@link #getData(Task)} restituira' una stringa in formato JSON
 * che le pagine in JSweet andranno a formattare.
 * N.B. Il proprio {@link DataProvider} dovrebbe evitare di avere stringhe codificate, questo e' solo un esempio.
 * */
public class StandardDataProvider implements DataProvider<String> 
{
	private final WordNet wordNet = WordNet.getInstance("3.0");
	
	@Override 
	public String getData(Task task) {
		if (task == StandardTask.TRANSLATION_ANNOTATION) {
			return "{" +
					"\"word\": \"Apple\"," +
					"\"description\": \"It's one of the most common fruits you mention in examples but that you rarely eat\"" +
					"}";
		}else if (task == StandardTask.WORD_ANNOTATION) {
			return "{\"description\": \"A motor vehicle with four wheels; usually propelled by an internal combustion engine\"}";
		}else if (task == StandardTask.DEFINITION_ANNOTATION) {
			return "{" + 
					"\"word\": \"car\"," +
					"\"hypernym\": \"motor_veichle\"" +
					"}";
		}else if (task == StandardTask.SENSE_ANNOTATION) {
			return "{" + 
					"\"word\":\"mouse\"," +
					"\"description\":\"A swollen bruise caused by a blow to the eye\"," +  
					"\"senses\": [\""+ wordNet.getSynsetFromID("02330245n").getGloss() +"\", "
								+ "\""+ wordNet.getSynsetFromID("03793489n").getGloss() +"\", "
								+ "\""+ wordNet.getSynsetFromID("10335563n").getGloss() +"\", "
								+ "\""+ wordNet.getSynsetFromID("14289387n").getGloss() +"\"]" + 
					"}";
		}else if (task == StandardTask.TRANSLATION_VALIDATION) {
			return "{" +
					"\"word\": \"rock\"," +
					"\"description\": \"A lump or mass of hard consolidated mineral matter\"," + 
					"\"translations\": [\"Un grumo o una massa di materia minerale consolidata dura\"," +
										"\"Materiale costituito dall'aggregato di minerali come quelli che formano la crosta terrestre\"," +
										"\"Un'associazione non ufficiale di persone o gruppi\"]" +
					"}";
		}else if (task == StandardTask.SENSE_VALIDATION) {
			return "{" + 
					"\"word\": \"bank\"," +
					"\"example\": \"He cashed a check at the bank\"," +
					//"\"sense\": \""+  wordNet.getSynsets("04424418") + "\"" +
					"\"sense\": \""+  wordNet.getSynsetFromID("09213565n").getGloss() + "\"" +
					"}";
		}else if (task == StandardTask.MY_ANNOTATION) {
			return "{" + 
					"\"sense\":  \"" + wordNet.getSynsetFromID("00222485n").getGloss() + "\"," +
					"\"words\": [\""+  wordNet.getSynsetFromID("00221981n").getName() + "\", " 
					  		  + "\""+ wordNet.getSynsetFromID("00221900n").getName() +"\", "
							  + "\""+ wordNet.getSynsetFromID("00222485n").getName() +"\", "
							  + "\""+ wordNet.getSynsetFromID("00221819n").getName() +"\"]" + 
					"}";
		}
		return null; 
	}
	

}
