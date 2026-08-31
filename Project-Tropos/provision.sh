sudo dnf update -y
sudo dnf install -y epel-release
sudo dnf module reset php -y
sudo dnf module enable php:remi-8.2 -y
sudo dnf install -y php php-cli php-fpm php-mysqlnd php-json
sudo dnf install -y nodejs
sudo systemctl enable --now php-fpm
echo '=== DISPOSITIVO PROVISIONADO CON EXITO ==='
