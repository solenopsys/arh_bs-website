ARCHS="linux/amd64,linux/arm64"
REG_ADDRESS="registry.alexstorm.solenopsys.org"
ITEM="alexstorm-solenopsys-site"

build_image(){
  echo "DOCKER BUILD"
  docker buildx build  --no-cache --platform ${ARCHS}  -t  $REG_ADDRESS/$ITEM -f ./build/solenopsys.Dockerfile --push ./
}

build_helm(){
    echo "HELM PACKAGE"
    mkdir tmp
    res=$(helm package ./build/install -d ./tmp/$ITEM)

    file=${res/Successfully packaged chart and saved it to: /}
    echo "HELM PUSH $file"
    curl --data-binary "@$file" http://helm.alexstorm.solenopsys.org/api/charts
    rm -r tmp

}

build_image
#build_helm
