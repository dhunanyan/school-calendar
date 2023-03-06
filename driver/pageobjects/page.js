export default class Page {
  open(id, group) {
    return browser.url(
      `https://web.usos.agh.edu.pl/kontroler.php?_action=katalog2/przedmioty/pokazZajecia&zaj_cyk_id=${id}&gr_nr=${group}`
    );
  }
}
