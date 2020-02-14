package it.uniroma1.fabbricasemantica.servlet;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public abstract class BaseServlet extends HttpServlet 
{
	private static final long serialVersionUID = 6784574842574L;
	
	/*
	 * percorso che serve per scrivere sul file "DataBase.tsv" che contiene tutte le risposte ai task per i vari utenti
	 */
	public final static String percorso = "src/DataBase.tsv";
	
	/*
	 * Lista che contiene il nome di tutte le pagine. Quando si risponde ai task delle pagine, 
	 * il nome della pagina corrispondente viene rimosso da questa lista
	 */
	protected List<String> pagine = new ArrayList<String>();
	
	/*
	 * Dizionario che contiene come chiave il nome di una pagina e come valore i vari dati da salvare sulla base di dati
	 */
	protected HashMap<String, String> diz = new HashMap<String, String>(); 

	/*
	 * metodo che crea il dizionario "diz"
	 */
	private void dizCreation(String user)
	{
		try(BufferedReader br = new BufferedReader(new FileReader(percorso)))
		{
			while (br.ready()) 
			{
				String line = br.readLine();
				String[] account = line.split("\t");
				if (account[0].equals(user) && account.length > 6) 
				{
					for (int i = 6; i < account.length; i++) 
					{
						String[] task = account[i].split(":");
						if (task.length == 2)
						{
							String chiave = task[0];
							String valore = task[1];
							
							diz.put(chiave.substring(0, chiave.length()), valore);
							pagine.remove(chiave.substring(0, chiave.length()));
						}	
					}
				}
			}
		}
		catch (IOException ex) 
		{
			ex.printStackTrace();
		}
	
	}
	
	/*
	 * Metodo che crea la lista "pagine"
	 */
	protected List<String> listCreation(String user)
	{
		pagine.add("myAnnotation");
		pagine.add("definitionAnnotation");
		pagine.add("senseAnnotation");
		pagine.add("senseValidation");
		pagine.add("translationAnnotation");
		pagine.add("translationValidation");
		pagine.add("wordAnnotation");
		
		dizCreation(user);
		
		return pagine;
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doSomething(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doSomething(request, response);
	}

	/**
	 * Metodo che implementa la logica richiesta nelle specifiche del backend.
	 * */
	protected abstract void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException;
	
	
}
