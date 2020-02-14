package it.uniroma1.fabbricasemantica.servlet.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import it.uniroma1.fabbricasemantica.servlet.BaseServlet;

public interface MetodiUserServlet 
{
	String percorso = BaseServlet.percorso;
	//Finish
	/*
	 * 		legge i file e
	 * 		genera un array del tipo {accountArray, stringaAccauntsInutili}
	 */
	default Object[] leggiFinish(String username, String s) 
	{
		String[] array2 = {};
		
		try(BufferedReader br = new BufferedReader(new FileReader(percorso)))
		{
			while(br.ready())
			{	
				String line = br.readLine();
				String[] array = line.split("\t");
				
				if ( !(array[0]).equals(username) ) 
					s += line + "\n";
				else
					array2 = array;
			}
			
		}catch (IOException ex){
			ex.printStackTrace();
		}
		
		Object[] arr = {array2, s};
		
		return arr;
	}
	
	/*
	 * premuto exit : i dati non vengono salvati
	 */
	default void nonSalvareFinish(String user)
	{
		Object[] arr = leggiFinish(user, "");
		
		String s = (String) arr[1];
		String[] array = (String[]) arr[0];
		
		List<String> a = new ArrayList<String>();
		
		for (int i = 0; i < 6; i++) 
		{
			a.add(array[i]);
		}
		
		try(BufferedWriter wr = new BufferedWriter(new FileWriter(percorso)))
		{
			wr.write(s);
			for (String string : a) 
			{
				wr.write(string + "\t");
			}
			wr.write("\n");
		}
		catch (IOException ex) 
		{
			ex.printStackTrace();
		}
	}
	
	/*
	 * viene premuto Save: i dati vengono salvati
	 */
	
	default void scriviFinish(String user, HashMap<String, String> diz) 
	{ 
		Object[] arr = leggiFinish(user, "");
		String s = (String) arr[1];
		String[] array = (String[]) arr[0];
		
		System.out.println("ecco " + s + " la s");
		
		List<String> a = new ArrayList<String>();
		
		for (int i = 0; i < 6; i++) 
		{
			a.add(array[i]);
		}
		
		diz.forEach((s1, s2) ->a.add(s1 + ":" + s2));
		System.out.println(diz + " dizionario quando devo salvare i dati" );
		
		try(BufferedWriter wr = new BufferedWriter(new FileWriter(percorso)))
		{
			wr.write(s);
			for (String string : a) 
			{
				wr.write(string + "\t");
			}
			wr.write("\n");
		}
		catch (IOException ex) 
		{
			ex.printStackTrace();
		}
		
		System.out.println(a + "questa è la lista finale");
	}
	
	
	
	//login
	/*
	 * vede se esiste l'account esiste:
	 * 		boolean per vedere ciò
	 */
	default boolean leggiLogin(String username, String password, String none) 
	{
		boolean isIn = false;
		try(BufferedReader br = new BufferedReader(new FileReader(percorso)))
		{
			while(br.ready())
			{	
				String line = br.readLine();
				String[] array = line.split("\t");
				if (array[0].equals(username) && array[1].equals(password)) isIn = true;
			}
			
		}catch (IOException ex){
			ex.printStackTrace();
		}
		
		return isIn;
	}
	
	
	//signup
	/*
	 * vede se l'account esiste già
	 */
	default boolean leggiSignup(String username, String password, String ripetiPassword) 
	{
		boolean isIn = false;
		try(BufferedReader br = new BufferedReader(new FileReader(percorso)))
		{
			while(br.ready())
			{	
				String line = br.readLine();
				String[] array = line.split("\t");
				if ( ((String)array[0]).equals(username)) 
					isIn = true;
			}
			if (!(password.equals(ripetiPassword))) isIn = true;
			
		}catch (IOException ex){
			ex.printStackTrace();
		}
		
		return isIn;
	}
	
	/*
	 * salva i dati del nuovo iscritto
	 */
	default void scriviSignup(String username, String password, String ita, String eng, String altraLingua, String livLingua) 
	{ 
		try(BufferedWriter wr = new BufferedWriter(new FileWriter(percorso, true)))
		{
			wr.write(username);
			wr.write("\t");
			wr.write(password);
			wr.write("\t");
			String lingua1 = (ita != null) ? ita : "off";
			wr.write(lingua1);
			wr.write("\t");
			String lingua2 = (eng != null) ? eng : "off";
			wr.write(lingua2);
			wr.write("\t");
			String lingua3 = (!altraLingua.equals("")) ? altraLingua : "null";
			wr.write(lingua3);
			wr.write("\t");
			wr.write(livLingua);
			
		}
		catch (IOException ex) 
		{
			ex.printStackTrace();
		}
	}
	
	
	//logout
	/*
	 * legge i file e
	 * 		genera un array del tipo {accountArray, stringaAccauntsInutili}
	 */
	default Object[] leggiLogout(String username, String s) 
	{
		String[] array2 = {};
		
		try(BufferedReader br = new BufferedReader(new FileReader(percorso)))
		{
			while(br.ready())
			{	
				String line = br.readLine();
				String[] array = line.split("\t");
				
				if ( !(array[0]).equals(username) ) 
					s += line + "\n";
				else
					array2 = array;
			}
			
		}catch (IOException ex){
			ex.printStackTrace();
		}
		
		Object[] arr = {array2, s}; 
		
		return arr;
	}
	
	/*
	 * viene usato per salvare i dati del dizionario
	 */
	default void scriviLogout(String user, HashMap<String, String> diz) 
	{ 
		Object[] array2 = leggiLogout(user, "");
		
		String[] array = (String[]) array2[0];
		String s = (String) array2[1];
		
		List<String> a = new ArrayList<String>();
		
		for (int i = 0; i < 6; i++) 
		{
			a.add(array[i]);
		}
		
		diz.forEach((s1, s2) ->a.add(s1 + ":" + s2));
		System.out.println(diz + " dizionario quando devo salvare i dati" );
		System.out.println(s + " questa è la s");
		
		try(BufferedWriter wr = new BufferedWriter(new FileWriter(percorso)))
		{
			wr.write(s);
			
			for (String string : a) 
			{
				wr.write(string + "\t");
			}
			
			wr.write("\n");
		}
		catch (IOException ex) 
		{
			ex.printStackTrace();
		}
		
		System.out.println(a + "questa è la lista finale");
	}
}
