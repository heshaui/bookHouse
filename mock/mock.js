module.exports={
	rules:[
		{
			pattern: /\/api\/home\.php/,
      		respondwith: './home.json'
		},
		{
			pattern: /\/api\/home_man\.php/,
      		respondwith: './home_man.json'
		},
		{
			pattern: /\/api\/home_goodb\.php/,
      		respondwith: './home_goodb.json'
		},		
		{
			pattern: /\/api\/home_nv\.php/,
      		respondwith: './home_nv.json'
		},
		{
			pattern: /\/api\/home_want\.php/,
      		respondwith: './home_want.json'
		},		
		{
			pattern: /\/api\/home_chu\.php/,
      		respondwith: './home_chu.json'
		}

	]
	
}
