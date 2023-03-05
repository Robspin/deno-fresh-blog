FROM denoland/deno

WORKDIR /app

COPY . .
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 8000

CMD ["task", "production"]


#FROM lukechannings/deno
#WORKDIR /app
#
#COPY . .
#
#RUN curl -fsSL https://deno.land/x/install/install.sh | sh
#RUN deno cache --lock=deno.lock --lock-write main.ts
#
#CMD ["run", "-A", "main.ts"]
#
#EXPOSE 8000
