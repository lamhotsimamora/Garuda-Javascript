class Language
{
	constructor()
	{
		this.language = null;
	}

	check(){
		if (_getStorage('language'))
		{
			this.language = _getStorage('language');
		}else{
			_saveStorage('language',1);
			this.language = 1;
		}
	}

	setId(){
		this.language = 0;
	}

	setEng(){
		this.language = 1;
	}

	get(){
		return this.language;
	}

	make(el,data)
	{
		Garuda(el).setHtml(data[this.language]);
	}
}


$language = new Language;

$language.check();
