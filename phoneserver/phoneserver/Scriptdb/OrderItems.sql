USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[OrderItems](
	[item_id][int] IDENTITY(1,1) not null PRIMARY KEY,
	[order_id][int],
	[product_id][int],
	[quantity][int],
	[list_price][int],
	[discount][int],
	[deleted] [bit] NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[updatedby] [nvarchar](255) NULL,
	[createdBy] [nvarchar](255) NULL,
	[updatedDateTime] [datetime] NULL,
	[createdDateTime] [datetime] NULL,
);

INSERT INTO [OrderItems]( order_id,product_id,quantity,deleted)
   VALUES
   ('1','1','1','0'),
   ('1','1','1','0'),
   ('2','1','1','0'),
   ('2','1','1','0');

ALTER TABLE [dbo].[OrderItems] ADD  CONSTRAINT [DF_OrderItems_deleted]  DEFAULT ((0)) FOR [deleted]
GO
