package it.uniroma1.fabbricasemantica.servlet.task;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * interfaccia che implementa i vari metodi che servono alle nostre TaskServlet
 */
public interface MetodiServlet 
{
	/*
	 * controlla la prima stringa non nulla in un array 
	 * e la ritorna
	 */
	default String controlla(Object[] array, HttpServletRequest request)
	{
		String s = "";
		for (int i = 0; i < array.length; i++) 
		{
			if (array[i] != null) 
			{
				s += (String) array[i]; 
				break;
			}
		}
		return s;
	}
	
	/*
	 * il metodo crea un array di radio button
	 * e lo ritorna
	 */
	default String[] createArrayRadio(HttpServletRequest request)
	{
		String yes = request.getParameter("radioButtonYes");
		String no = request.getParameter("radioButtonNo");
		
		String[] array = {yes, no};
		
		return array;
	}
	
	/*
	 * il metodo crea un array di checkboxe
	 * e lo ritorna
	 */
	default String[] createArrayCheck(HttpServletRequest request)
	{
		String checkOne = request.getParameter("checkboxOne");
		String checkTwo = request.getParameter("checkboxTwo");
		String checkThree = request.getParameter("checkboxTree");
		String checkFour = request.getParameter("checkboxFour");
		String[] array = {checkOne, checkTwo, checkThree, checkFour};
		
		return array;
	}
	
	/*
	 * Il metodo reindirizza l'utente in una pagina a caso
	 */
	default void skippaPagina(String pagina, List<String> pagine, HttpServletResponse response) throws IOException
	{
		pagine.remove(pagina);
		if(pagine.size() == 0) 
		{
			pagine.add(pagina);
			response.sendRedirect(pagina + ".html");
		}
		else
		{
			int x = (int)(Math.random() * (pagine.size()));
			String s = pagine.get(x);
			pagine.add(pagina);
			response.sendRedirect(s + ".html");
		}
	}
	
	/*
	 * Il metodo salva i dati nel dizionario che fatto da chiave = nomePagina, valore = risposta,
	 * toglie la pagina dalla lista che contiene ancora quelle da fare
	 * e, se questa lista non è vuota, reindirizza l'utente in una pagina a caso, 
	 * altrimenti lo reindirizza nella pagina finale
	 */
	default void salvaPagina(String pagina, List<String> pagine, HashMap<String, String> diz, String s, HttpServletResponse response) throws IOException
	{
		pagine.remove(pagina);
		diz.put(pagina, s);
		int x = (int)(Math.random() * (pagine.size()));
		if (pagine.size() != 0) response.sendRedirect( pagine.get(x) + ".html");
		else response.sendRedirect("finish.html");
	}
	
	
}
