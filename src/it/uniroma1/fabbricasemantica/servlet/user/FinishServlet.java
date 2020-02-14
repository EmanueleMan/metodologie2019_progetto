package it.uniroma1.fabbricasemantica.servlet.user;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import it.uniroma1.fabbricasemantica.servlet.BaseServlet;

@WebServlet(name="FinishServlet", urlPatterns="/finish.jsp")
public class FinishServlet extends BaseServlet implements MetodiUserServlet
{
	private static final long serialVersionUID = 8484501789787L;

	@SuppressWarnings("unchecked")
	@Override
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String save = request.getParameter("save");
		
		if (save == null)
		{	
			HttpSession session = request.getSession(); 
			boolean isLoggedIn = session.getAttribute("username") != null;
			System.out.println("logoutServlet: isLoggedIn " + isLoggedIn);
			String user = (String) session.getAttribute("username");
			System.out.println(user);
			
			nonSalvareFinish(user);
			
			diz = (HashMap<String, String>) session.getAttribute("dizionario");
			pagine = (List<String>) session.getAttribute("pagine");
			
			diz.clear();
			pagine.clear();
			
			isLoggedIn = false;
			session.setAttribute("username", null);
			isLoggedIn = session.getAttribute("username") != null;
			System.out.println("logoutServlet: isLoggedIn " + isLoggedIn);
			response.sendRedirect("login.html");
		}
		else 
		{
			HttpSession session = request.getSession(); 
			diz = (HashMap<String, String>) session.getAttribute("dizionario");
			pagine = (List<String>) session.getAttribute("pagine");
			
			
			
			String email = (String) session.getAttribute("username");
			System.out.println(email);
			scriviFinish(email, diz);
			
			diz.clear();
			pagine.clear();
			
			boolean isLoggedIn = session.getAttribute("username") != null;
			System.out.println("logoutServlet: isLoggedIn " + isLoggedIn);
			String user = (String) session.getAttribute("username");
			System.out.println(user);
			
			isLoggedIn = false;
			session.setAttribute("username", null);
			isLoggedIn = session.getAttribute("username") != null;
			System.out.println("logoutServlet: isLoggedIn " + isLoggedIn);
			response.sendRedirect("login.html");
		}
	}

}
