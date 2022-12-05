FROM registry.alexstorm.solenopsys.org/hc-base:latest AS BUILD_APP
ARG MODULE_NAME
WORKDIR /softconverged
RUN git pull
RUN git submodule add -f https://git.alexstorm.solenopsys.org/alexstorm-solenopsys-site modules/sc-fm-site
RUN echo '{  "version": 2,  "projects": {"solenopsys": "modules/sc-fm-site" },"$schema": "./node_modules/nx/schemas/workspace-schema.json" }' > workspace.json
RUN nx  build solenopsys  --configuration=production


FROM nginx:latest  AS NGINX
COPY --from=BUILD_APP /softconverged/packages/sc-front-site/build/solenopsys-nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILD_APP /softconverged/dist/modules/solenopsys /var/www

CMD ["nginx"]







