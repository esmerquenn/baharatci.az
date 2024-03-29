

export async function POST(req) {
  const body = await req.json();
  cookies().set("__session", "jwt", {maxAge: 4897128941, httpOnly: true, domain: ".yetim.az"})
  return NextResponse.json(body);
}

export async function GET() {
  cookies().get('__session');
  fetch
  return
}