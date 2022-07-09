<?php 

class Home extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/home/Home');
		$this->load->view('web-loka/template/footer');
	}
	public function Profile_Perusahaan(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/home/Profile_Perusahaan');
		$this->load->view('web-loka/template/footer');
	}
	public function Visi_Misi(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/home/Visi_Misi');
		$this->load->view('web-loka/template/footer');
	}
	public function Struktur_Organisasi(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/home/Struktur_Organisasi');
		$this->load->view('web-loka/template/footer');
	}
	public function Investor(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/home/Investor');
		$this->load->view('web-loka/template/footer');
	}
}

?>