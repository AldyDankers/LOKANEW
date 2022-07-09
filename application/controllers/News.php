<?php 

class News extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/news/News');
		$this->load->view('web-loka/template/footer');
	}
}

?>