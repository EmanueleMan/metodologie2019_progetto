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

@WebServlet(name="LogoutServlet", urlPatterns="/logout.jsp")
public class LogoutServlet extends BaseServlet implements MetodiUserServlet
{
	private static final long serialVersionUID = 8484501789787L;

	
	@SuppressWarnings("unchecked")
	@Override
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{	
		HttpSession session = request.getSession();
		pagine = (List<String>) session.getAttribute("pagine");
		System.out.println(pagine + "qui siamo in logout");
		diz = (HashMap<String, String>) session.getAttribute("dizionario");
		System.out.println(diz + "qui siamo in logout");
		
		String user = (String) session.getAttribute("username");
		
		String start = request.getParameter("startButton");
		
		if (start!=null)
		{	
			
			if (pagine.size() == 0) response.sendRedirect("finish.html");
			else 
			{
				int x = (int)(Math.random() * (pagine.size()));
				String s = pagine.get(x);
				response.sendRedirect(s + ".html");
			}
		}
		else
		{
			pagine = (List<String>) session.getAttribute("pagine");
			System.out.println(pagine + "qui siamo in logout");
			diz = (HashMap<String, String>) session.getAttribute("dizionario");
			System.out.println(diz + "qui siamo in logout");
			
			scriviLogout(user, diz);
			
			pagine.clear();
			diz.clear(); 
			
			boolean isLoggedIn = session.getAttribute("username") != null;
			System.out.println("logoutServlet: isLoggedIn " + isLoggedIn);
			
			System.out.println(user);
			
			isLoggedIn = false;
			session.setAttribute("username", null);
			isLoggedIn = session.getAttribute("username") != null;
			System.out.println("logoutServlet: isLoggedIn " + isLoggedIn);
			response.sendRedirect("login.html");
		}
	}

}
