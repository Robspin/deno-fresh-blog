FROM lukechannings/deno
WORKDIR /app

COPY . .

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN deno cache --lock=deno.lock --lock-write main.ts

CMD ["task", "start"]

EXPOSE 8000
