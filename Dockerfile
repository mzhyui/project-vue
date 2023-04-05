FROM nginx
MAINTAINER mzh

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
ADD default.conf /etc/nginx/conf.d/
COPY dist /usr/share/nginx/html