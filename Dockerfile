FROM denoland/deno

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 8000

CMD ["task", "production"]


#FROM lukechannings/deno
#
#ARG GIT_REVISION
#ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}
#
#WORKDIR /app
#
#COPY . .
#
#RUN curl -fsSL https://deno.land/x/install/install.sh | sh
#RUN deno cache --lock=deno.lock --lock-write main.ts
#
#CMD ["task", "production"]
#
#EXPOSE 8000
