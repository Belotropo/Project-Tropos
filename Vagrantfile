Vagrant.configure("2") do |config|
  config.vbguest.auto_update = false
  config.vm.box = "eurolinux-vagrant/centos-stream-9"

  config.vm.define "web01" do |web|
    web.vm.hostname = "web01"
    web.vm.network "private_network", ip: "192.168.56.10"
    web.vm.network "forwarded_port", guest: 80, host: 8082
    web.vm.synced_folder "./Project-Tropos/frontend-static", "/var/www/html", type: "rsync"

    web.vm.provider "virtualbox" do |v|
      v.memory = 1024
      v.cpus = 1
    end

    web.vm.provision "shell", inline: <<-SHELL
      dnf install -y httpd php php-mysqlnd
      systemctl start httpd
      systemctl enable httpd
      sudo chown -R apache:apache /var/www/html
      sudo chmod -R 755 /var/www/html
    SHELL
  end

  config.vm.define "db01" do |db|
    db.vm.hostname = "db01"
    db.vm.network "private_network", ip: "192.168.56.11"

    db.vm.provider "virtualbox" do |v|
      v.memory = 1024
      v.cpus = 1
    end

    db.vm.provision "shell", inline: <<-SHELL
      dnf install -y mariadb-server
      systemctl start mariadb
      systemctl enable mariadb
    SHELL
  end

end