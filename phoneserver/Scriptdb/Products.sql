USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products](
	[product_id] [int] IDENTITY(1,1) NOT NULL,
	[product_name] [nvarchar] (255) null,
  [brand_id][int]null,
  [category_id][int]null,
  [model_year][nvarchar] (255)  null,
  [price][nvarchar] (255)  null,
	[description] [nvarchar] (255)  null,
  [status][nvarchar] (255)  null,
  [deleted] [bit] null,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
	
PRIMARY KEY CLUSTERED 
(
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [Products] ([product_name],[brand_id],[category_id],price,deleted) 
values 
	('Iphone X'           ,'1','1' ,'1000000','0'),
  ('Samsung Galasy S'   ,'1','1' ,'1000000','0'),
  ('Samsung Galasy Z'   ,'1','1' ,'1000000','0'),
  ('Samsung Galasy Note','1','1' ,'1000000','0'),
  ('Bphone Joy 1+'      ,'13','1','1000000','0');
GO

ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Brands1] FOREIGN KEY([brand_id])
REFERENCES [dbo].[Brands] ([brand_id])
GO

ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Brands1]
GO

ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories] FOREIGN KEY([category_id])
REFERENCES [dbo].[Categories] ([category_id])
GO

ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories]
GO
