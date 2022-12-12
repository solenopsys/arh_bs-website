ARCHS="linux/amd64,linux/arm64"
REG_ADDRESS="registry.alexstorm.solenopsys.org"
ITEM="alexstorm-solenopsys-site"

build_image(){
  echo "DOCKER BUILD"
  docker buildx build  --no-cache --platform ${ARCHS}  -t  $REG_ADDRESS/$ITEM -f ./build/solenopsys.Dockerfile --push ./
}



#build_image
build_helm
